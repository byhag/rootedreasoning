---
layout: article
title: "Introduction: God and Man"
subtitle: "God's Relationship with Man"
bgimage: balloon.jpg
module: "God and Man"
permalink: /God-and-Man/introduction
intro: true
---

Having read the first branch, one might feel like he was convinced of the God of Christianity. However, the first branch merely gives evidence for God; it does not allow us to get to know Him. We can get to know God in a similar way that we all get to know our friends or co-workers. We do so through communication and observation. How do they act? What do they say? Who, at their core, are they? What makes them who they are? Similarly, we can ask these questions of God, and we can learn their answers through God’s actions through history and His communications with us.
 
Additionally, this branch takes a look into two of the greatest questions ever posed, “Why am I here?” and “Who am I?”. Our identity and purpose are closely related to the question of God’s existence. If God exists, our identity and purpose is certainly defined in one way. If He does not, however, our identity and purpose are two different things all together. This branch will examine this connection and how God relates to man.
 
## Branch Articles:
{% for article in site.articles %}
{% if article.module == "God and Man" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{site.baseurl}}{{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}