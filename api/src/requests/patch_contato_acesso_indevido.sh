curl -X PATCH http://localhost:8080/contatos/9999 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TOKEN_VALIDO" \
     -d '{"telefone": "1100000000"}'
