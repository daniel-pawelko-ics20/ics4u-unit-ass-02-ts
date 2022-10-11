/**
 * Highest Run
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-10-10
 */

// Importing promptSync to allow user input
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()

// User input
const userString = prompt('Please input a string: ')

/**
 * @param {string} str String
 * @returns {number} highestCount
 */
function maxRun(str: String): number {
  // Return 0 if string is empty
  if (str === '') {
    return 0
  }

  // Defining variables
  let tempChar: String = str.charAt(0)
  let counter = 1
  let highestCount = 1

  // Process
  for (let index: number = 0; index < str.length; index++) {
    if (tempChar === str.charAt(index)) {
      counter++
    } else if (counter > highestCount) {
      highestCount = counter
      counter = 1
    } else {
      counter = 1
    }
    tempChar = str.charAt(index)
  }

  // Returning largest run
  return highestCount
}

// Calling function
const max = maxRun(userString)

// Output
console.log(`Biggest run: ${max}`)

// Done
console.log('\nDone.')
