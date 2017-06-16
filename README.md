# Grove - Gesture

A Microsoft MakeCode package for for Seeed Studio Grove - Gesture, see https://www.seeedstudio.com/Grove-Gesture-p-2463.html

## Basic usage

```blocks
// Create a gesture dirver
let gesture: Grove_Gestrue.PAJ7620 = null;

// Initialize gesture module
gesture.init();

// Get gesture vaule and display
let data = gesture.read();
basic.showNumber(data);
```
More operation

Use ``run()`` to run the gesture event read, and use ``is()`` to check the event type.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

