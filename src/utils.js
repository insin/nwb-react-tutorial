/**
 * Throw an error if a Response is not ok (in the 200-299 range), otherwise
 * return it.
 */
function checkResponse(response) {
  if (response.ok) {
    return response
  }

  let error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Handles boilerplate for fetch requests which parse response JSON on success.
 */
export async function fetchJSON(url, options = {}) {
  let response = checkResponse(await fetch(url, options))
  let data = await response.json()
  return data
}
