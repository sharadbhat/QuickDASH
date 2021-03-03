#!/bin/sh

# Shaka Packager
./shaka-packager.exe \
  input=src/sample_720.mp4,stream=audio,output=dest/sample_720_audio.mp4 \
  input=src/sample_720.mp4,stream=video,output=dest/sample_720_video.mp4 \
  input=src/sample_540.mp4,stream=audio,output=dest/sample_540_audio.mp4 \
  input=src/sample_540.mp4,stream=video,output=dest/sample_540_video.mp4 \
  input=src/sample_360.mp4,stream=audio,output=dest/sample_360_audio.mp4 \
  input=src/sample_360.mp4,stream=video,output=dest/sample_360_video.mp4 \
  --profile on-demand \
  --mpd_output sample-manifest-full.mpd \
  --min_buffer_time 3 \
  --segment_duration 3