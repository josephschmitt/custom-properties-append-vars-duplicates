# Duplicate Variables using `postcss-custom-properties`

## Setup

I have a super simple src postcss file with two custom properties:
1. `--myColor`: Declared in a `:root` selector directly in the postcss file
2. `--myBackgroundColor`: Added via the `variables` JavaScript plugin API.

## Expected Result

Running through the `postcss-custom-properties` plugin with `preserve` and `appendVariables`
produces an output file with the `--myColor` variable preserved, and the `--myBackgroundColor`
variable appended at the end of the file.

## Actual Result

The output file correctly preserves the `--myColor` variable, but then it outputs it _again_
appended to the bottom of the file. This is wasteful, and gets especially bad in large projects
with lots of declared variables.
