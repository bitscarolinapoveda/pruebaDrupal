
    ___    ____  ______   __                     __  _                 
   /   |  / __ \/ ____/  / /   ____  _________ _/ /_(_)___  ____  _____
  / /| | / / / / /_     / /   / __ \/ ___/ __ `/ __/ / __ \/ __ \/ ___/
 / ___ |/ /_/ / __/    / /___/ /_/ / /__/ /_/ / /_/ / /_/ / / / (__  ) 
/_/  |_/_____/_/      /_____/\____/\___/\__,_/\__/_/\____/_/ /_/____/  
                                                                       

ADF Locations is a module that offers a service with REST, consulting a content type called "Locations", the endpoint is http://local.pag-bits8.com/location-resources?_format=json and you can add two parameters:

- limit: Set the number of records to show
- offset: From which point of records start with the count

-- GETTING STARTED --

1. Install the module, usually in the path: modules/custom
2. Turn on the module
3. The module automatically create a content type called "Locations", with three fields:
- title
- address
- locations
4. Create the respective nodes based on the content type "Locations"
5. From the endpoint, consult the records according to the two established parameters.

-- LINKS --

Documentation: https://www.mediacurrent.com/blog/building-rest-endpoints-drupal-8/
Documentation: https://valuebound.com/resources/blog/create-rest-resource-for-get-method-drupal-8



