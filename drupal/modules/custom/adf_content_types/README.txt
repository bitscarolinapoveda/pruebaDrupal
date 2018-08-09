

                                                                       
ADF Content types is a module that offers a service with REST, consulting a content type called "Article", the endpoint is http://example.com/content-types-resources?_format=json and you can add three parameters:

- limit: Set the number of records to show
- offset: From which point of records start with the count
- type: Filter what kind of bundle you want

-- GETTING STARTED --

1. Install the module, usually in the path: modules/custom
2. Turn on the module
3. The module automatically create a field called "Link", the machine name is "field_url_reference" and this content type has the next fields by default:
- title
- body
- Etiquetas
- Imagen
- Link
5. Activate de service "Content types rest resource" in this url http://example.com/admin/config/services/rest
6. Grant permissions to the anonymous user to consume the new service in this url: http://example.com/admin/people/permissions
7. Create the respective nodes based on the content type "Article"
8. From the endpoint, consult the records according to the three established parameters.

-- LINKS --

Documentation: https://www.mediacurrent.com/blog/building-rest-endpoints-drupal-8/
Documentation: https://valuebound.com/resources/blog/create-rest-resource-for-get-method-drupal-8



