---
sidebar_position: 2
---

# Asset Escrow

The **Asset Escrow system**, developed by [Cfx.re](https://cfx.re/) in partnership with [Tebex](https://www.tebex.io/) is the official encryption system that is used for all resources sold on our store.

### How does it work?

- The asset escrow system was made for developers who sell resources for FiveM and want to protect their code from being leaked or stolen.
- The system works by encrypting selected files in a resource and locking it as an "asset". This means that the selected files that got encrypted will
  no longer be viewable or editable.
- Assets are authenticated through a servers license key from the cfx keymaster.
- When a user starts the resource on their server, the license key the server is currently using will be checked to see if the FiveM account that owns that license key is also the same account that owns the asset.
- When a user purchases a script/resource from tebex, this "asset" is then granted to their FiveM account, and to be able to authenticate with the resource and use it,
  their server needs to be using a license key that was generated on the same account

### What do I need to know?

When attempting to purchase a resource from our Tebex store, you will be asked to login with your FiveM account before you can proceed any further.
The FiveM account that you login with is the account that the resource will be tied to.
This means that when purchasing a script from our tebex store, you need to login to the fivem account that owns the license key that your server uses. <br/>
You can view, download, and transfer your owned assets through the cfx.re keymaster, which can be found using the link below: <br/>
**https://keymaster.fivem.net/asset-grants**

### Learn More

Want to read more about the asset escrow system? Visit the official cfx.re forum post about it: <br/>
**https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151**
