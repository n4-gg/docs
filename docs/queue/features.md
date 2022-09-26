---
title: Features
sidebar_position: 2
---

- Player priority can be managed through either a database table, discord roles, or both at the same time (Support for Discord/Prio Bots).
- Ability to completely disable all discord related features.
- If you choose to utilize discord roles, you will need (obviously) a discord server, and a bot in that server with permission to view members and roles.
- A database is optional, not a requirement. It is not a dependency.
- API for getting queue information, adding & removing priority.
- Priority points stack for players meaning players can have multiple points with different categories active at the same time.
- Ability to set a join delay to hold players in the queue for a set amount of seconds on server restarts before they can load in (Allows scripts to finish initializing).
- Ability to set an amount of priority points for each discord role you choose through the role id.
- Ability to change the language and messages displayed in the queue.
- Option to deny a connecting player if they are not in your discord server.
- Adaptive cards are used to display information in a clean and modern way.
- Adaptive card customization including banner image, button labels, urls, icon images, and colors.

## Important

If you decide to utilize priority through a database table, you will need either mysql-async or oxmysql.

(oxmysql is recommended as it is a direct upgrade and backwards-compatible replacement of mysql-aync)
