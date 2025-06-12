curl -X PUT http://localhost:8080/contatos/1 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TOKEN_VALIDO" \
     -d '{"name": "Faltando Campos"}'
