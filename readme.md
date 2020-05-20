# Shoot

A CLI tool for capturing web page screenshots.

## Installation

- `npm i -g tomashubelbauer/shoot` to install/update globally
- `npx tomashubelbauer/shoot` to execute ad-hoc

## Usage

`shoot .` or `shoot test.html` or `shoot google.com/ncr`

## Testing

`node . google.com/ncr` or `node . test.html`

## Status

Not maintained.

## Changelog

### 2020-05-20

Resolves file names to `file://` URLs and prepends `http://` if missing.

### 2020-03-27

Initial version released.

## To-Do

### Add an option to capture full page screenshots

### Add an option to wait for a selector or a timeout

### If `index.html` exists and there is no argument, assume `index.html`

### Add a help switch

### Add a switch to disable web security to allow `fetch` on `file://` protocol

Maybe do this automatically?
