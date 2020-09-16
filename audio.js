const { OpusEncoder } = require('@discordjs/opus');

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
const encoder = new OpusEncoder(48000, 2);

// Encode and decode.
const encoded = encoder.encode(buffer);
const decoded = encoder.decode(encoded);
