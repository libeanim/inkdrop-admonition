# Inkdrop Admonition

Allows to add block-styled side content to your [Inkdrop](https://www.inkdrop.info/) notes.

## Motivation

As I mainly write my notes in markdown using Inkdrop, admonitions help me to write a more structured content and collapsible blocks can make my notes easier to read.

_The inspiration came from the MkDocs [admonition extension](https://squidfunk.github.io/mkdocs-material/extensions/admonition/)._

## Install

```
ipm install admonition
```

## Usage

There are currently 10 different admonition types: `note`, `info`, `question`, `abstract`, `danger`, `warning`, `success`, `fail`, `example` and `spoiler`.

In order to create a new `info` admonition with the title "Info" you can use following syntax:
```
[[info | Info]]
| **markdown** content
```

![Picture of an info admonition](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/info.png)

In order to create a block without a title just leave it out:
```
[[info]]
| This is an `info` admonition without a title.
```

![Picture of an info admonition without a title](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/info-no-title.png)

### Spoiler

The `spoiler` admonition is special as it is collapsible, doesn't have an icon and always requires a title:
```
[[spoiler | Spoiler]]
| **markdown** content
```

![Picture of an open spoiler admonition](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/spoiler-open.png)

![Picture of a closed spoiler admonition](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/spoiler-closed.png)


To make a "normal" admontion collapsible just add `-spoiler` to the type e.g. `abstract-spoiler`.

```
[[abstract-spoiler | Abstract]]
| **markdown** content
```
![Picture of an abstract spoiler admonition](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/abstract-spoiler.png)

 _As soon as one makes a "normal" admonition collapsible the title becomes mandatory._

### Complex Content

You can add any kind of markdown content inside of an admonition, e.g.:

```
[[note | Note]]
| My note content
|
| | This | is   |
| |:-----|:-----|
| | a    | test |
| 
| ```js
| const s = "test";
| ```
| [[info | Info]]
| | another block
```

![Picture of an admonition with markdown content](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/complex-content.png)

### Keymapping

By default the shortcut <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>a</kbd> will add a new (note) admonition and everything that is selected with the cursor will be automatically placed inside of it.

## Screenshots
Remaining admonitions:

![Picture of remaining admonitions](https://github.com/libeanim/inkdrop-admonition/raw/master/docs/images/remaining.png)
