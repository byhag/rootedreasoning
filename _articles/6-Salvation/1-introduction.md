---
layout: article
title: "Introduction: Salvation"
subtitle: "God's Grace to You"
bgimage: tree-water.jpg
module: Salvation
permalink: /Salvation/introduction
intro: true
---

After considering the ideas presented so far, it would be possible and even logical to think, “well, what does this have to do with me (individually)?”. Some might have already inferred the answer to this question.
 
If you have agreed with the ideas up until this point, you’d understand that man and God had an agreement. Man (you) disregarded and broke the agreement, which is infinitely destructive. Because man (you) could not repair it, God came as man to repair it Himself, by dying. Christians call this “salvation”.
 
God intended this new relationship for all men, and He offers it freely. However, with that free offering, we have the propensity to reject it. How do we accept this gift? Only those who are willing will reap its eternal benefits. This branch deals with how it is that man accepts this new relationship.
 
## Branch Articles:
{% for article in site.articles %}
{% if article.module == "Salvation" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}