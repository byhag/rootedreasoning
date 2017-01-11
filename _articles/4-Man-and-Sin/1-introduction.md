---
layout: article
title: "Introduction: Man and Sin"
subtitle: "Man's Current State"
bgimage: trees.jpg
module: "Man and Sin"
permalink: /Man-and-Sin/introduction
intro: true
---

Where there is opportunity to succeed, there is also an opportunity to fail.
 
From the last branch, we found that God made man with the ability to choose Him. Additionally, we examined man’s purpose and the need for man put God first. Yet where there is man and the ability to choose, there is the ability to put oneself first. This branch examines what is meant by “putting oneself first” and the consequences of those actions.
 
## Branch Articles:
{% for article in site.articles %}
{% if article.module == "Man and Sin" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{site.baseurl}}{{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}