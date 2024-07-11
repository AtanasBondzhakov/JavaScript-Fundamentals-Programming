function browserHistory(dataObj, commandsArr) {

    for (const command of commandsArr) {

        if (command === 'Clear History and Cache') {
            dataObj['Open Tabs'] = [];
            dataObj['Recently Closed'] = [];
            dataObj['Browser Logs'] = [];
        }

        const [action, siteName] = command.split(' ');

        if (action === 'Open') {
            dataObj['Open Tabs'].push(siteName);
            dataObj['Browser Logs'].push(`Open ${siteName}`);

        } else if (action === 'Close') {
            if (dataObj['Open Tabs'].includes(siteName)) {
                const index = dataObj['Open Tabs'].indexOf(siteName);
                const removedSite = dataObj['Open Tabs'].splice(index, 1);
                dataObj['Recently Closed'].push(removedSite[0]);
                dataObj['Browser Logs'].push(`Close ${siteName}`);
            }
        }
    }

    console.log(dataObj['Browser Name']);
    console.log(`Open Tabs: ${dataObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${dataObj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${dataObj['Browser Logs'].join(', ')}`);
}