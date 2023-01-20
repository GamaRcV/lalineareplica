#!/bin/bash
echo "$(date +"%I:%M %p")" > hora.txt
VIDSOURCE="rtsp://admin:admin123456@server-tpd.dyndns-ip.com:1500"
AUDIO_OPTS="-c:a aac -b:a 0 -ac 2"
VIDEO_OPTS="  -s 1280x720 -c:v libx264 -b:v 80000"
OUTPUT_HLS=" -hls_time 1 -hls_list_size 2 -start_number 1 -hls_flags delete_seg$
ffmpeg -i "$VIDSOURCE" -y -t 20   $AUDIO_OPTS $VIDEO_OPTS  $OUTPUT_HLS  mystrea$