import { ILineParser } from 'log-to-csv';
import log2Csv from 'log-to-csv';
 
 default class NotificationEventsParser implements ILineParser {
 
    public regx:RegExp;
    public header:string;
 
    constructor() {
        
        this.regx = /(\d+-\d+-\d+ \d+:\d+:\d+).+AndroidNotification: notifiy message:(.+),/;
        this.header = `Date,Timestamp,NotificationMessage\n`;
    }
 
    
    getLineRegexValues(line) {
        let values =  this.regx.exec(line);
        if(values === null) {
            return null;
        } else {
            let dateString = values[1];
            let timestamp = new Date(dateString).getTime();
            let notifyMessage = values[2];
            return `${dateString},${timestamp},${notifyMessage}`;
        }
    }
 
}
var app = new log2Csv(
    'input.txt',
    new NotificationEventsParser(),
    (output) => process.stdout.write(output)
);
 
app.parse();