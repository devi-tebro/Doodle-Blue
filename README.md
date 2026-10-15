My Learning Notes

These are the practice files I made while learning the basics, before I started building the Campus Events website(Task1).

Task 1 : Campus Events

This is a small website I built to learn HTML and CSS. It's a made-up campus events portal where students can look at upcoming events, check the schedule and fill in a registration form. I started from a design mockup and rebuilt it one page at a time, beginning with plain HTML and adding the styling last.

What's in it :

There are six pages:

index.html: the home page, with a banner, a few featured events and the event categories
about.html: what the site is for, plus the types of events
events.html: every event as a card, with a search box at the top
event-details.html: the full details of one event (Tech Fest 2026) and a button to register
schedule.html: a table with the date, time and venue of each event
register.html: the registration form

For now each html page has it's own style sheet later a single style sheet will be used for all html pages.

How the pages connect :

Home leads to Events. From Events you can go to the Schedule page or open an event's details, and the details page leads to the Register form. The navigation bar at the top of every page also links to all the main pages, so you can jump around freely.

Running it

There's nothing to install. Keep all the files in the same folder and double click index.html. It opens in your browser.

How I built it :

I didn't write everything at once. I went in this order, so each step only added one new idea:

Basic tags only: headings, paragraphs, links, images, lists
div blocks to group things together
Semantic sections: header, nav, section, footer
Repeated pieces like cards and buttons
A table for the schedule and a form for registration
CSS for colors, spacing and layout (flexbox and grid)
A media query so it also works on a phone
A little JavaScript for the search box and the form message

If you're learning too, I'd suggest doing the same thing: get the plain page working first, and only then make it pretty.
