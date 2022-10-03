# Spotify Artists Data Table

This project shows a data table obtaining data from the Spotify API.


# How to run the project

Once you already have installed the project dependencies, just execute the following command:

    npm run start

## How to use

When the project is loaded in your browser you will find a searchBar. Its initial value is setted to 'Jimi', but you can change the search criteria in order to find your favorite music artists. Just type a name and click search/press enter key.

 - To Add a new row, press the button and a modal form will appear to help you.
 - To modify a row, just click'em and a modal will appear.
 - In order to delete one or some rows just select some of them by clicking the checkboxes. If some selection is made a button to delete the selection will appear in the top bar.

## Limitations

Due the Spotify API limitations, the service will only be called in order to retrieve the data when we perform a search query.
The operations CREATE, UPDATE and DELETE in the table, will be volatile changes (only reflected in the redux store)
