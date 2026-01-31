# Singlish to Sinhala Translator – Playwright Test Automation

## Project Overview
This repository contains automated test cases developed using **Playwright** to test the **Singlish to Sinhala transliteration system** available at:

https://www.swifttranslator.com/

The purpose of this project is to evaluate:
- Accuracy of Singlish to Sinhala conversion
- Robustness of the system for edge cases
- Stability and usability of the user interface (UI)

This project is created as part of **IT3040 – IT Project Management (Assignment 1)**.

---

## Scope of Testing
The following areas are covered:
- Positive functional test cases (correct Singlish inputs)
- Negative functional test cases (edge cases such as slang, typos, formatting issues)
- UI-related behavior (real-time output updates, input clearing, paste behavior)

---

## Tech Stack
- **Playwright**
- **JavaScript**

---
## Prerequisites
Ensure the following are installed on your system:
- **Node.js** (version 18 or above recommended)
- **npm** (comes with Node.js)

Check installation:
node -v
npm -v

## Installation Steps
1. Clone the repository:
   git clone https://github.com/zaan994/IT23305564_ITPM_Assignment01.git
   
2. Install dependencies:
   npm install
   
3. Install Playwright browsers:
   npx playwright install

---

## Running the Tests

To execute all test cases:
npx playwright test

To run tests in headed mode:
npx playwright test --headed

---

## Viewing Test Reports

After test execution, view the HTML report using:
npx playwright show-report

The report displays:
- Test case execution status (Pass/Fail)
- Screenshots (if enabled)
- Detailed logs

---

## Test Cases
- `Pos_Fun_0001` - 25 test cases
- `Neg_Fun_0001` - 10 test cases
- `Pos_UI_0001` - 1 test case

---

**Note: If there is a connection issue, the test cases might get failed to pass, you can view the fail reason, probably it causes: "Test timeout of 30000ms exceeded.".
So please be kind enough to run the test case again to get the correct output. I have attached a test result screenshot to the above assumption clarification. Thank you

<img width="2642" height="6962" alt="localhost_9323_" src="https://github.com/user-attachments/assets/4e46b8c4-ed70-48ac-b679-ad41b52398a9" />


## Author
- **Registration Number:** IT23305564
- **Module:** IT3040 – ITPM
- **Semester:** Year 3, Semester 2

