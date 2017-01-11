---
layout: article
title: "Introduction: God"
subtitle: "God's Existence and Nature"
module: God
bgimage: milky-way.jpg
permalink: /God/introduction
intro: true
---

With so much uncertainty with simple things in life, the question, “Is there a God?” seems to be unknowable. However, from a Christian perspective, belief in God is not the product of uneducated, blind faith but rather the assurance from convicting, undeniable evidence. Knowing God, however, is not the same as knowing that the sun shines or that rain is wet. It is deeper - a knowledge that transcends our small earth and finite minds. With that in mind, it is important to understand that the goal of these articles is not to assert and justify that God’s existence is knowable in the same way that your mother’s existence is knowable. Rather, the goal is to present logical, undeniable arguments leading to the conclusion of God’s existence.
 
Before getting into the articles, it’s important to address three things that keep people from being convinced by arguments for God. The first is the belief that nothing exists outside of the natural. For obvious reasons, if it’s already assumed that nothing supernatural exists, it would be very difficult to convince otherwise. The second is the assumption that we can only know what science reveals to us. The idea goes, “If it can’t be tested, then we can’t believe in it.” Science is great for gaining understanding of the world around us, but it is limited in its scope. For instance, science cannot tell us what is moral, what is logical, what is historical, or what you experience. Finally, if you don’t want to believe God exists, you won’t. He allows you to do that. These articles are challenging. They may ask you to question your very worldview, but the quest for truth is an arduous climb. One we all hope to summit.

## Branch Articles:
{% for article in site.articles %}
{% if article.module == "God" %}
{% unless article.title == page.title %}
- [{{article.title}} - {{article.subtitle}}]({{article.permalink}})
{% endunless %}
{% endif %}
{% endfor %}