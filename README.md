# QuickDASH

Proof of concept for streaming video using DASH.

**DASH** - Dynamic Adaptive Streaming over HTTP

**ABR** - Adaptive Bitrate Streaming

## Prerequisites

1. Ffmpeg - [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)
2. Shaka Packager - [https://github.com/google/shaka-packager](https://github.com/google/shaka-packager)

## Usage

To run locally,

```sh
# Place your sample.mp4 in the public/src folder

# Generate different quality renditions of the video
./qualityGenerator.sh

# To generate the MPD file (Media Presentation Description)
./mpdGenerator.sh

# Install server dependancies
npm i

# Start server
npm run start
```

Head over [http://localhost:80](http://localhost:80)
