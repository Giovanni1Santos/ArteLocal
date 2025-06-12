curl -X PATCH http://localhost:8080/contatos/1 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TOKEN_INVALIDO" \
     -d '{"telefone": "11777777777"}'
