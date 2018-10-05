/**
 * File: utils.js
 *
 * Utility functions to be imported independently.
 */
import cloneDeep from 'clone-deep'

/**
 * Function to map over an object.
 * @param {*} obj a json object received from a Drupal or WordPress API call
 */
export function standardizeCMSData (obj) {
  if (process.env.cms === 'drupal') {
    return obj.map(node => reduce(node, (fields, field, val) => {
    val = val[0]
    let segments = field.match(/^field_(.*)/)
      if (segments && segments[1]) {
        fields[segments[1]] = val.value
      } else if (field === 'path') {
        if (val.alias) {
          fields.slug = val.alias.replace(/^\//, '')
        } else {
          fields.slug = node.nid[0].value + ''
        }
      } else if (field === 'nid') {
        fields.id = val.value
      }
      return fields
    }, {}))
  } else if (process.env.cms === 'wordpress') {
    return obj.map(({id, slug, acf}) => Object.assign({id, slug}, acf))
  }
}

/**
 * Function to map over an object.
 * @param {*} obj An object to map over
 * @param {*} callback
 */
export function map (original, callback) {
  let obj = cloneDeep(original)
  for (let key in obj) {
    obj[key] = callback(key, obj[key])
  }
  return obj
}

/**
 * Function to filter an object's properties
 * @param {*} original
 * @param {*} callback
 */
export function filter (original, callback) {
  let obj = {}
  for (let key in original) {
    if (callback(key, original[key])) {
      obj[key] = original[key]
    }
  }
  return obj
}

/**
 * Function to reduce an object's or Map properties
 * @param {*} original
 * @param {*} callback
 * @param {*} accumulator
 */
export function reduce (original, callback, accumulator) {
  if (original instanceof Map) {
    for (let [key, value] of original) {
      accumulator = callback(accumulator, key, value)
    }
  } else {
    for (let key in original) {
      accumulator = callback(accumulator, key, original[key])
    }
  }
  return accumulator
}

/**
 * Removes duplicates from an array, even one level deep.
 * @param {Array} arr
 * @param {string|null} subkey
 */
export function dedupe (arr, subkey = 'id', keepFirst = true) {
  return reduce(arr.reduce((map, item, index) => {
    let key = subkey ? item[subkey] : item
    let indexes = map.get(key) || []
    indexes.push(index)
    if (!keepFirst) {
      map.delete(key)
    }
    map.set(key, indexes)
    return map
  }, new Map()), (cleaned, key, indexes) => {
    let idx = (keepFirst) ? arr[indexes[0]] : arr[indexes[indexes.length - 1]]
    cleaned.push(idx)
    return cleaned
  }, [])
}
