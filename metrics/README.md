# Parsing `k6`'s JSON metrics output

<img src="k6-metrics.gif">

## Metrics

When `k6 run` is executed, a summary/aggregate of performance statistics are displayed in the terminal.

But, the full/detailed metrics can be gotten:

:information_source: https://k6.io/docs/using-k6/metrics/

## Generating Metrics for a Run

### Command-line Argument: `--out json=<file>`

To generate the metric file in JSON:

> docker run -it --rm -v /tmp:/scripts -v /tmp:/jsonoutput grafana/k6 run `--out json=/jsonoutput/k6out.json` /scripts/testk6.js

:information_source: https://k6.io/docs/results-visualization/json/

### Example

[/workloads/metrics/k6out.json](/workloads/metrics/k6out.json)

## Parsing the JSON Metric File

### Format

The output file's lines are 1 of 2 types:

* `Point`: https://k6.io/docs/results-visualization/json/#point

  A `point` is a single measurement in time.

* `Metric`: https://k6.io/docs/results-visualization/json/#metric

  A `metric` is a type of aggregate or statistic of some measure.

### Example

[/workloads/metrics/k6out.json](/workloads/metrics/k6out.json)

```json
{"type":"Metric","data":{"name":"http_reqs","type":"counter","contains":"default","thresholds":[],"submetrics":null},"metric":"http_reqs"}
{"type":"Point","data":{"time":"2022-08-13T01:26:26.97176957Z","value":1,"tags":{"scenario":"default","url":"http://test.k6.io","name":"http://test.k6.io","method":"GET","status":"308","proto":"HTTP/1.1","expected_response":"true","group":""}},"metric":"http_reqs"}
{"type":"Metric","data":{"name":"http_req_duration","type":"trend","contains":"time","thresholds":[],"submetrics":[{"name":"http_req_duration{expected_response:true}","suffix":"expected_response:true","tags":{"expected_response":"true"}}]},"metric":"http_req_duration"}
{"type":"Point","data":{"time":"2022-08-13T01:26:26.97176957Z","value":131.205895,"tags":{"expected_response":"true","group":"","scenario":"default","url":"http://test.k6.io","name":"http://test.k6.io","method":"GET","status":"308","proto":"HTTP/1.1"}},"metric":"http_req_duration"}
{"type":"Metric","data":{"name":"http_req_blocked","type":"trend","contains":"time","thresholds":[],"submetrics":null},"metric":"http_req_blocked"}
```
