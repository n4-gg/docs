---
title: Configuration Guide
sidebar_position: 4
---

**NOTE:** If you decide to NOT utilize a database table for priority points, please be sure to remove the following line from the fxmanifest.lua file: **@mysql-async/lib/MySQL.lua**

### joinDelay
> Set to 60 by default. This value must be a number and is represented in seconds. This is used when your server first starts up, it will hold players in the queue for this set of time of time before letting them load in. This is mainly used for server restarts, where mass amounts of players attempt to connect all at once, and is helpful to let all of your scripts finish initializing before having any players join. There is no limit for what this number can be, but the lowest it can be set to is 0, which is no delay at all. Anywhere from 30-60 seconds is recommended.

### cooldown
> Set to 3 by default. This value must be a number and is represented in seconds. This is used every time a player connects to your server, it is the amount of time they are processed for before either joining the server or being put into the queue. This is used to prevent players spamming and to prevent rate limiting if you are using discord roles for priority. There is no limit for what this number can be, but the lowest it can be set to is 0, which would let players instantly connect. Anywhere from 1-3 seconds is recommended.

### displayQueueInHostName
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This one is fairly self-explanatory. If enabled, once your server has a queue count greater than 0, that number will be displayed in square brackets in front of your servers name on the server list. Here's an example of how it would look if you had a 55 player queue: [55] Server Name Here.

### maxPlayersToDisplay
> Set to 10 by default. This value must be a number. This is used for the "queue list" page where you can view the first 10 players in the queue, including their name, discord name, and amount of priority points they have and represents how many players in the queue will be shown on this page. This page cannot be disabled, but if you don't want it to show any players, it should be set to 0. If a number greater than 10 is set, the page will expand until it cannot stretch any further and you will be able to scroll up and down to view the remaining players in the queue. As an example, if you only want the player in first place to show in the queue, this value should be set to 1. A maximum of 10 players shown at a time is recommended.

### consoleInfo
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value represents whether you want to have information from the queue print/display in your server console or not. This includes information such as a players name, their amount of priority points, and their position in the queue every time a new player joins the queue as well as other miscellaneous information whenever players join or load into the server. There is no recommendation for this, as it is completely up to you.

### stackPrio
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value represents whether you want to have all available rows of priority points for a player stack together or not. For example, if a player has two discord roles setup with priority, role A with 1500 points and role B with 500 points, and a player has both of these roles, that player will receive 2000 points of priority. If this value is set to false, they will only receive the points from role A, since that is the role with the larger amount of points. It is recommended that this is left as the default value, true.

### discord - enabled
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value represents whether you want to use the discord integration feature of the queue or not. If enabled, it will allow you to use discord roles for priority points as well as denying players from connecting unless they are in your discord server. There is no recommendation for this, as it is completely up to you.

### discord - requireIdentifier
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value allows you to deny players from connecting if they do not have their discord app open and their account linked to FiveM. There is no recommendation for this, as it is completely up to you.

### discord - requireInGuild
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value allows you to deny players from connecting if they are not in your discord server. If enabled, it will NOT require players to have their discord account linked to FiveM in order to connect, you must enable the config option "requireIdentifier " for that. There is no recommendation for this, as it is completely up to you.

### discord - whitelist
> Set to true by default. This value is a Boolean, meaning it can only be true or false. This value represents a toggle for a simple whitelist system that is built into the queue. This whitelist allows you to deny or accept the connections of specific players based on one set discord role. If a player has the allowed role, they will be able to connect, otherwise, they will be denied when trying to connect. If enabled, you must also fill out the required role discord role ID under the config option "whitelistRoleId". There is no recommendation for this, as it is completely up to you.

### discord - whitelistRoleId
> Set to "1234567890" by default (random placeholder number). This value must be a number. This is used for the whitelist system explained above. This must be the role ID of a specific discord role that you want to act as the key for the whitelist. If the whitelist is enabled and a player has this role, they will be able to connect, otherwise, they will be denied when trying to connect. There is no recommendation for this, you can set this to whatever discord role you would like, but if the config option "whitelist" is enabled, it is required that this value also be properly filled out.

### discord - botToken
> Blank by default. This value must be a string. If the value "discord.enabled" is enabled, it is required that this be filled in. You need to input the bot token of a discord bot that is in your discord server, and it must have permission to view members and roles. If you are not familiar with how to create a bot, add it to your discord server, and retrieve the bot token, there are plenty of tutorials on YouTube and google. IMPORTANT: DO NOT share your bot token with anybody, ever!

### discord - guildId
> Blank by default. This value must be a string. If the value "discord.enabled" is enabled, it is required that this be filled in. You need to input the guild id of your discord server. This can be done by enabling developer mode on discord, then right-clicking on your discord servers avatar, then clicking "Copy ID". The guild id you enter needs to be the same guild that your bot is in.

### prioRoles
> By default, two placeholder values are entered as examples. This value must be a table, and each value inside of it that represents a role must also be a table. This is used to give players priority points through discord roles, so if a player is found to have a specific role in your discord, they will receive the set amount of priority points for that role. Each row/role must contain 3 values: label (string), roleId (number), and points (number). The label is what the role will be displayed and represented as. The role id is the id that corresponds to a specific discord role and it can be found by enabling developer mode on discord, then right-clicking on a role and clicking "Copy ID". Points is the amount of priority points that you would like to set for a specific role, and it must be a number greater than 0. All 3 values are required, even the label. If you don't want to display a label, it can just be left blank.
