### Debounce Voting (React)

# Instructions (codesandbox.io):
# 1. Create a component that contains 2 buttons (Like/Dislike) which can be toggled but only one button can be active at any given time.
# These buttons will have the following states:
#   1. If a button is not active and clicked, the button will increment count and become active.
#   2. In addition to #1, if the other button is active, the other button will decrement count and become inactive.
#   3. If a button is active and clicked, the button will decrement count and become inactive.
# Note: Only one button can be active at any time, but both buttons can be inactive.
# 2. Add basic styling to the active button to clearly show that it is active (some styles already added to styles.css)
# 3. If react class is used, convert to a functional component and use hooks.
# 4. Write a debouncer method that disallows the user from rapidly selecting the buttons. It will prevent the user to vote until the delay has been reached. You can implement a trailing debouncer where the user action is executed at the end of the delay.
# 5. If trailing debouncer was implemented,  now implement the debouncer at the start of the delay (how react updates) - meaning allow user action as soon as they select a button and then delay any subsequent actions until after the delay is reached.