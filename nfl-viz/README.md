NFL VIZ
================

This is inspired by: [Data Vizualization Using ElasticSearch Aggregations](http://www.elasticsearch.org/blog/data-visualization-elasticsearch-aggregations/)

It utilizes ElasticSearch to search NFL play data from the 2013 season.

To load the NFL data in your own instance of ElasticSearch, from the command line::

```
curl -XPOST localhost:9200/nfl?pretty
curl -XPUT localhost:9200/nfl/2013/_mapping?pretty -d @data/nfl_mapping.json
curl -XPOST localhost:9200/nfl/2013/_bulk?pretty --data-binary @data/nfl_2013.json
```