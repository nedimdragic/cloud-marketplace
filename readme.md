# Custom Cloud Function Marketplace
The Custom Cloud Function Marketplace (CCDFM) Is A Tool That Allows You To Easily Add Commonly Used Predefined Functions In To Tealium'S Cdh. Some Functions Will Allow For You To Customise The Configuration With A Ui.

---

### Installing The Tool

The Tool Is Currently Included Within The "Cdh Master File" Tamper Monkey Script Which Can Be Found [Here](Https://Solutions.Tealium.Net/Hosted/Tampermonkey/Newui/Master.Cdh.User.Js "Here"). It May Be Available In Other Formats At A Later Date. Once The Tampermoneky Script Is Enabled, You Can Activate / Deactivate The Tool Through The Newly Added "Scripts" Tab In Cdh Under "Server-Side Tools.

### Adding A Function To Your Profile
To Add A Function To Your Profile;
- Navigate To The "Functions" Tab As Usual, And Select The "Add Custom Function" Button.
- You Will Then Be Prompted With A List Of Available Functions, Which Can Be Filtered By Function Trigger - "Transformation", "Event" And "Visitor"
- Once You Have Selected A Function, You Will Be Prompted To Configure The Rest Of The Setup.
- Some Functions May Have A Config Ui Defined Which Can Allow You To Customise Specific Parts Of The Script Easily To Suit Your Requirements. 
- After This, You Will Have The Standard Setup For The Function - Selecting The Source Of The Trigger (Data Source, Event Feed, Audience Etc.
- Once You Have Finished The Setup - The Function Will Be Added, And Anything Defined In The Config Fields Will Be Updated Within The Code Where Applicable!

### Adding A Function To The Marketplace

The list of functions is currently hosted [here](https://github.com/tealiumlabs/cloud-marketplace/blob/main/master.json "here").
The file is JSON format and any new scripts should follow the following format.
###Tables
                    
Property Name  | Description
------------- | -------------
name   | The name of the tool as it should display in the UI. **(required)**
description  | The description of the tool as it shown in the UI. **(required)**
type   | The Trigger type for the function **(required) ['transformation', 'event', 'visitor']**
code   | The path of the hosted .js file for the script - This is NOT the actual code of the function.** (required)**
ui_config   | The path of the hosted .json file for the ui_config - This is NOT the actual JSON
author  | The email address of the author / maintainer of the code

### ui_config
ui_config needs to be a JSON object which specifies the fields to show within the UI.

For Example
```
{
        "fields" : [
            {   
                "id" : "overwrite",
                "display_name" : "Overwrite",
                "description" : "Should new hashed values should overwrite exisiting property in data object",
                "type" : "boolean",
                "value" : false
            },
            {
                "id" : "prefix",
                "display_name" : "Prefix",
                "description" : "The Prefix for the hashed attributes",
                "type" : "text",
                "requires" : [{
                    "overwrite":true
                }],
                "value" :"hashed_"
            },
            {
                "id" : "prop_names",
                "display_name" : "Property Names",
                "description" : "A list of property names to hash",
                "type" : "userlist",
                "values" : ["email"],
                "size" : 5,
                "multiple" : true
            }
        ]
    }
```

### ui_config Properties
Property Name  | Description | Options
------------- | ------------- | -------------
id | The ID of the property as it is used within the code and | Any String, no whitespaces 
display_name | The Display Name of the field as it appears in the UI | Any String.
description | The description of the field | Any String
type | The Field type to use | **text** - "text" type input element <br /> **number** - "number" type input element <br /> **boolean** - "checkbox" type input element<br /> **userlist** - "select" element that allows the user to add and remove entries <br /> **list** - "select" element which cannot have entires adjusted
size | The size of the field - use only for list / userlist elements | Any positive Numberic value, ideally a maximumof 10.
multiple  | Whether a field allows multiple options selected. Usable with 'select' inputs | Boolean, true/false
value | Default data to be populated within the input | Text/Number Inputs - Any String / Number. <br /> Boolean Inputs - Boolean (true/false)
values | For "list" and "userlist" type fields only. <br /> These will be the options to choose from. | List / UserList inputs - <br /> Array of strings / numbers / booleans
requires | Defines a condition for the field to be shown. An Array of conditions | An array of objects, <br /> The Array is "OR" conditions, the objects are "AND" <br /> <br />**Example** <br />`[{ "a":true }]` <br />Requires the field with id "a" to have a value of **true** <br /><br /> **Example** <br/>```[{ "a":true, "b":"hello world" }]``` <br/> Requires the field with id "a" to have a value of true, **AND** "id" b to have a value of "hello world" <br/><br/>**Example** <br/> `[  {"a":true},  { "b":"hello world" } ]` <br /> Requires the field with id "a" to have a value of true, OR "id" b to have a value of "hello world"

