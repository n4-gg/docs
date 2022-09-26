---
title: Exports
sidebar_position: 5
---

1. **queueList**: Returns a table containing all players currently in the queue and their information. This export has no parameters.

```lua
local queue = exports['v-queue']

RegisterCommand('list', function()
    local playersInQueue = queue:queueList()
    for i=1, #playersInQueue do
        print(json.encode(playersInQueue[i], {indent = true}))
    end
end)
```

2. **queueSize**: Returns a number that represents the current amount of players in the queue. This export has no parameters.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('size', function()
    local queueCount = queue:queueSize()
    print('There are '..queueCount..' players waiting in the queue.')
end)
```

3. **connectingList**: Returns a table containing all players currently in the 'connecting' stage of the queue. This is the phase where they are no longer in the queue, but they are not on the loading screen yet, most likely downloading server content. This export has no parameters.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('list', function()
    local playersConnecting = queue:connectingList()
    for k in pairs(playersConnecting) do
        print(k)
    end
end)
```

4. **connectingSize**: Returns a number that represents the current amount of players in the 'connecting' stage of the queue. This is the phase where they are no longer in the queue, but they are not on the loading screen yet, most likely downloading server content. This export has no parameters.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('size', function()
    local connectingCount = queue:connectingSize()
    print('There are '..connectingCount..' players connecting to the server.')
end)
```

5. **addPrio**: Adds and stores a specified amount of priority points for a specified identifier in the "queue" database table.

##### This export has 3 parameters: 

_Identifier_: The identifier of the player you would like to add priority for. The data type of this parameter must be a string. This can be any valid FiveM identifier (fivem, license, discord, xbl, live, steam, ip, license2). It must contain the identifier prefix. 

_Points_: The amount of priority points you would like to give to this specific identifier. The data type of this parameter must be a number and it must be above 0.

_Category_: This parameter is optional, and is simply used to display extra information about that specific row of priority or to easily organize the row through a named category of your choice. The data type of this parameter can be anything on input, but it will be converted to a string.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('addprio', function()
    --Example 1
    local insertId = queue:addPrio('discord:1234567890', 5000)
    print('Prio added with insert id - '..insertId)

    --Example 2
    local insertId = queue:addPrio('discord:1234567890', 2500, 'admin')
    print('Prio added with insert id - '..insertId..' for the admin category.')
end)
```

6. **removePrio**: Permanently removes/deletes a specified row of player priority from the "queue" database table.

##### This export has 1 parameter: 

_ID_: The "id" column of the specific row of priority you would like to delete inside of the "queue" table in the database. The data type of this parameter must be a number.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('delprio', function(source, args, rawCommand)
    local id = tonumber(args[1])
    local result = queue:removePrio(id)
    if result.affectedRows > 0 then 
        print('Deleted prio with id '..id)
    else     
        print('A row of prio with id '..id..' was not found.')
    end
end)
```

7. **getPrio**: Allows you to retrieve a table containing all available rows of priority belonging to a specific player ID. Each row contains a label and amount of points.

##### This export has 1 parameter: 

_Player ID_: The ID (number or string) of a player currently in the server.

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

RegisterCommand('checkprio', function(source, args, rawCommand)
    local id = tonumber(args[1])
    local prioList = queue:getPrio(id)
    for i=1, #prioList do
        print(prioList[i].label, prioList[i].points)
    end
end)
```

8. **playerConnecting**: Allows you to manually start the queue connection process instead of automatically through your own 'playerConnecting' event.

##### This export has 3 parameters: 
It is recommended that you use the default 3 parameters provided by the 'playerConnecting' event: name, deferrals, and setKickReason.  

_name_: 1st parameter from the 'playerConnecting' event. The name of the player connecting (string).

_setKickReason_: 2nd parameter from the 'playerConnecting' event (function).

_deferrals_: 3rd parameter from the 'playerConnecting' event (table).

```lua title="Example Usage: Lua"
local queue = exports['v-queue']

local function OnPlayerConnecting(name, setKickReason, deferrals)
    local player = source
    local steamIdentifier
    local identifiers = GetPlayerIdentifiers(player)

    for _, v in pairs(identifiers) do
        if string.find(v, "steam") then
            steamIdentifier = v
            break
        end
    end

    if not steamIdentifier then
        CancelEvent()
        setKickReason("You are not connected to Steam.")
    else
        queue:playerConnecting(name, setKickReason, deferrals)
    end
end

AddEventHandler("playerConnecting", OnPlayerConnecting)
```