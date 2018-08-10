

                                                                       
Bits card module allows the creation of a CARD, concept created by Bits Americas, which consists of a custom block that extends the BlockBase class to facilitate the creation of fields programmatically, later they can be viewed from Drupal UI.

Its main goodness is the creation of a service called: "Export card config rest resource" that when activated and add to the endpoint as parameter the id of the block, exposes in json format the fields with their respective values.

-- GETTING STARTED --

A. Install the module, usually in the path: modules/custom
B. Turn on the module
C. Activate the "Export card config rest resource" service and add permissions.
D. It also has the ability to expose in JSON blocks created from UI, you can create any type of field in the block and it will automatically show you the entered values. The endpoint to consume this service is: http //: www.exaxmple.com/block-resources/4?_format=json. Like the previous service, the id of the created block is added as a parameter. Next I describe the steps for the creation of a block called "whybits".

1. Activate the Block service.
2. Add a block type from the path: http //: www.exaxmple.com/admin/structure/block/block-content/types
3. Put the label "whybits" and save.
4. Add an image type field with the label that you feel comfortable
5. In the option of Number of allowed values ​​leave unlimited and save options.
6. Deactivate the check "Alt" and "Alt" and activate "Title"
7. Remove the Body field, we do not need it for the desired functionality.
8. Add another field type Link with the label that you feel comfortable.
9. In the option of Number of allowed values ​​leave limited to one and save options.
10. In the options of Allow link text, leave the check in deactivated.
11. Now let's add a custom block based on the newly created block type from the path http://www.example.com/admin/structure/block/block-content
12. Select the link whiybits and put the label ¿Porqué Bits Américas?.
13. Fill in the image fields with title and save.
14. Consume the service, the number four is the id block, you have to investigate the id number of you block, this is the end point: http //: www.exaxmple.com/block-resources/4?_format=json


-- LINKS --

Documentation: https://bitsamericasmail-my.sharepoint.com/:u:/r/personal/alexander_salcedo_bitsamericas_com/Documents/Sistemas%20y%20Tecnologia/2018/Bits/Pagina%20Web%20Bits/03%20Proceso%20Ejecucion/Desarrollo/Creacion_card.zip?csf=1&e=6u7gj2/



