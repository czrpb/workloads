# Parsing `k6`'s JSON metrics output

<img src="k6-metrics.gif">

## `--out json=<file>`

To generate the metric file in JSON:

> docker run -it --rm -v /tmp:/scripts -v /tmp:/jsonoutput grafana/k6 run `--out json=/jsonoutput/k6out.json` /scripts/testk6.js

:information_source: https://k6.io/docs/results-visualization/json/

## 