---
title: "Introduction: Truth"
subtitle: "God's Words to Mankind"
bgimage: forest-path.jpg
layout: article
module: Truth
permalink: /Truth/introduction
intro: true
---

If the evidence of God’s existence was all that we had, one might be very puzzled that this almighty and purposeful God would leave us with no clue of what He desired. This module examines the question of truth and the evidence of God’s revealed words to humanity. It also addresses the question regarding our possession of an accurate record of those words.
 
Anyone who has talked with Christians has experienced a common foundation from a book called the Bible which establishes ideas and presents what they call “truth”. This section walks through the evidence of why Christians call the Bible “truth” today.

## Branch Articles
{% for article in site.articles %}
{% if article.module == "Truth" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{site.baseurl}}{{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}