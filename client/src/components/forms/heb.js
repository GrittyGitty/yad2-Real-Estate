const errHebrew = {
    HEB_INVALID_EMAIL: "כתובת המייל אינה תקינה!",
    HEB_FIELD_IS_REQUIRED: "שדה זה הינו שדה חובה",
    HEB_PASS_DOESNT_MATCH: "הסיסמאות שהזנת אינן תואמות.",
    HEB_PHONE_ISNT_VALID: "מספר הטלפון איננו תקין!",
    HEB_NAME_INVALID: "השם שהזנת איננו תקין",
    HEB_INVALID_CITY: "מקום המגורים איננו מוכר.",
    HEB_INVALID_STREET: "הרחוב איננו מוכר במקום המגורים שבחרת",
    passwordErrMessages: {
        min: "להיות לפחות באורך 8 תווים",
        uppercase: "להכיל אות אחת גדולה לפחות",
        lowercase: "להכיל אות אחת קטנה לפחות. ",
        symbols: "להכיל אחד מהתווים הבאים לפחות: !@#$%^&*",
        digits: "להכיל ספרה אחת לפחות",
        spaces: "להתחיל ולהסתיים בתו שאיננו רוח"
    }
}


const formHebrew = {
    HEB_EMAIL: "כתובת דוא\"ל",
    HEB_SEND: "שלח",
    HEB_PASSWORD: "סיסמה",
    HEB_REENTER_PASSWORD: "הזן שנית",
    HEB_PHONE_NUMBER: "מספר טלפון",
    HEB_NAME: "שם",
    HEB_LAST_NAME: "שם משפחה",
    HEB_EXPLANATION: "השדות המסומנים בכוכבית הינם שדות חובה. שאר השדות ישמשו בתור פרטי התקשרות בתיאור הנכס כברירת מחדל."
}

const typeStepHebrew = {
    HEB_FORSALE: "מכירה",
    HEB_RENT: "השכרה",
    HEB_ROOMMATES: "דירות שותפים",
    HEB_COMMERCIAL: "נדל\"ן מסחרי",
    HEB_CHOOSE: "בחר סוג מודעה:"
}

const addressStepHebrew = {
    HEB_TITLE: "מלא\\י כתובתך",
    HEB_TYPE_OF_PROPERTY: "סוג הנכס",
    HEB_UPKEEP: "מצב הנכס",
    HEB_MUNICIPALITY: "ישוב",
    HEB_STREET: "רחוב",
    HEB_NUMBER: "מס' בית",
    HEB_APT: "מס' דירה",
    HEB_ENTRANCE: "כניסה",
    HEB_FLOOR: "קומה",
    HEB_TOTAL_BUILDING_FLOORS: "סה\"כ קומות בבניין",
    HEB_TOTAL_PROPERTY_FLOORS: "סה\"כ קומות בנכס",
    HEB_NEIGHBORHOOD_LABEL: "שכונה",
    HEB_NEIGHBORHOOD_PLACEHOLDER: "(יתמלא אוטומטית)",
    HEB_CHOOSE_PROPERTY_TYPE: "סוג נכס",
    HEB_CHOOSE_UPKEEP: "מצב נכס",
    HEB_SEARCH_CITY: "חפש את מקום מגוריך",
    HEB_SEARCH_STREET: "חפש את רחובך"
}

const propertyDetailsStepHebrew = {
    HEB_TITLE:"פרטי הנכס",
    HEB_NUM_BALCONIES_LABEL: "מס' מרפסות",
    HEB_NUM_PARKING_SPOTS: "מס' חניות"
}



const addListingHebrew = {
    HEB_STEP_FOOTER: (step, steps) => `שלב ${step} מתוך ${steps}`
}


export { errHebrew, formHebrew, typeStepHebrew, addListingHebrew, addressStepHebrew, propertyDetailsStepHebrew }