# Pull Request Details

## Description

Describe the feature/bug you are submitting a PR for.

Example:

This PR adds the Preferences view to the app.

## Screenshot

If the feature deals with the user interface, please provide a screenshot of the design or a gif that demonstrates the functionality.

## Expected Behavior

Describe the expected behavior using a checklist

Example:

1. Navigate to the Settings view in the address bar: localhost:3000/settings
1. Navigate to preferences by clicking on the preference link in the header

## Approach

Provide details about the approach you took implementing the feature/fix if it gives context that would not be gleaned solely from reading the code.

Example:

In implementing this view I did not use react-router-dom as a render component. Instead, routing is handled in the `Switch` statement in the `Routes.js` file. I think this will need to be updated at some point because it is causing an issue related to active links.

## Issue

Reference Github issue(s) or JIRA tickets if applicable.

Example:

#382, #383, SUB-81
