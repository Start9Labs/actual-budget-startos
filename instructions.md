# Actual Budget

## Documentation

- [Actual Budget documentation](https://actualbudget.org/docs/) — upstream guide to budgeting, bank sync, multi-device sync, and rules.

## What you get on StartOS

- A **Web UI** interface for the Actual Budget sync server, where you do all your budgeting work.
- An auto-generated admin password — there's no first-run wizard; the admin account is created for you on install.

## Getting set up

On install, StartOS posts a critical task to retrieve your admin password.

1. Run the **Get Admin Password** task and copy the password somewhere safe.
2. Start the service.
3. Open the **Web UI** interface, paste the password, and start a new budget or restore from a backup.

## Using Actual Budget

### Web UI

The web interface is where you create budgets, enter transactions, build categories and rules, and connect bank sync. The login uses the admin password from setup.

Public SimpleFIN bridges need no setup. A private SimpleFIN bridge must be allowed by IP in Actual's `config.json`, and there is no action for this setting, so it takes SSH access to your server. Edit `/media/startos/data/package-data/volumes/actual-budget/data/main/config.json` (create it if it does not exist) so that it lists the bridge's IP, for example `{ "simplefinAllowedNetworks": ["192.168.1.50"] }`, then restart Actual Budget. Allow the single IP rather than a subnet. See the [upstream server configuration guide](https://actualbudget.org/docs/config/#actual_simplefin_allowed_networks-configjson-simplefinallowednetworks) for the setting's format.

### Actions

- **Get Admin Password** — re-display the admin password at any time.
