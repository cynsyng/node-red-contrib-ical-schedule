export interface iCalEvent {
    due?: string | number | Date;
    exdate: any;
    recurrences: any;
    rrule?: any;
    startDate?: any;
    endDate?: any;
    recurrenceId?: any;
    item?: any;
    type?: string;
    duration?: any;
    attendees?: any;
    attendee?: any;
    organizer?: string;
    summary?: any,
    topic?: string,
    location?: string,
    start?: Date
    end?: Date,
    datetype?: string,
    event?: string,
    description?: string,
    id?: string,
    allDay?: boolean,
    rule?: string,
    on?: boolean,
    off?: boolean,
    countdown?: object,
    calendarName?: string,
    uid?: string,
    categories?: string[],
    alarms?: any[]
  }
  
  export interface ICalendarEvent {
    exdate?: any;
    recurrences?: any;
    summary?: string,
    location?: string,
    eventStart?: Date,
    eventEnd?: Date,
    date?: string,
    event?: string,
    description?: string,
    id?: string,
    allDay?: boolean,
    rrule?: any,
    rruleText?: string,
    countdown?: object,
    calendarName?: string,
    uid?: { uid: string, date: string },
    duration?: number,
    durationSeconds?: number,
    organizer?: string,
    isRecurring?: boolean,
    datetype?: string,
    attendee?: any,
    categories?: string[],
    alarms?: ICalendarAlarm[],
    pipelineUid?: string,
    scheduleUid?: string,
    timezone?: string
  }
  
  export interface ICalendarAlarm {
    trigger?: string,
    triggerParsed?: Date,
    description?: string,
    action?: string,
    attendee?: any,
    summary?: string,
  }