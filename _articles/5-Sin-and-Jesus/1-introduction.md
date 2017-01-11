---
layout: article
title: "Introduction: Sin and Jesus"
subtitle: "God's Redemption of Mankind"
bgimage: forest-path.jpg
module: "Sin and Jesus"
permalink: /Sin-and-Jesus/introduction
intro: true
---

Jesus said “Truly, truly, I say to you, everyone who practices sin is a slave to sin. The slave does not remain in the house forever; the son remains forever. So if the Son sets you free, you will be free indeed.” (John 8:34-36)
 
A man who was called Jesus, from a small village in Roman occupied Palestine in the first century made some very strong claims. He claimed that He was man and God, would die and rise again, and free people from sin.
 
This branch examines who this Jesus was, the meaning and legitimacy of the resurrection, and the purpose of His coming.
 
## Branch Articles:
{% for article in site.articles %}
{% if article.module == "Sin and Jesus" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}