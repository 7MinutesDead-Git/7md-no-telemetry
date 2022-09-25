# 7md-no-telemetry
Kills Windows telemetry processes on Windows 11 Home Edition, as there's no other means of disabling *all* telemetry on this edition.

# Requirements
- [Node 16.14.2+](https://nodejs.org/en/download/) (install via your preferred means)  
- Typescript 4.8.3+ `npm install -g typescript`

# Setup Instructions
1) Clone this repo.
2) Run `npm install` in root directory to install dependencies.
3) Run `npm compile` to compile the typescript.
4) Run `npm start` to begin the process!  
  
# Recommended Task Scheduling Setup  
The `Task Scheduler` is Windows' version of cron jobs, so I recommend having this app run automatically on startup.  
1) Hit Windows key.
2) Begin typing "Task Scheduler" and select it.
3) In the `Actions` section, select `Create Task`  
![image](https://user-images.githubusercontent.com/50963144/192122741-19cc7863-4958-411c-8d09-277058dc5b34.png)  
4) In the `General` tab, provide a name for this task that makes sense to you (for running this script automatically).  
![image](https://user-images.githubusercontent.com/50963144/192122747-215a8d0a-6a30-4718-8c54-e029cbb624fa.png)  
5) In the `Triggers` tab, click `New...`, and select `At startup` for when to begin the task:  
![image](https://user-images.githubusercontent.com/50963144/192122754-652049e5-5c34-434d-97ab-b48d0c63031f.png)
6) In the `Actions` tab, click `New...`.
  - In the `Program/script` field, navigate to where *you* installed Node, i.e., `"C:\nodejs\node.exe"`.
  - In the `Add arguments` field, enter `npm start` (this is the command that will run automatically).
  - In the `Start in` field, enter the path to this cloned repo, i.e. `"C:\Cool7MDApps\no-win-telemetry"`
7) Click `OK` to finish adding the task. Windows will likely ask you to confirm your password. And that's it!

# Bugs, Concerns and Suggestions
I made this *very* hastily just to get something up and running (and testing), so if you manage to come across this repo and have some suggestions, more specific terms to look for, or any problems, please submit an issue!
