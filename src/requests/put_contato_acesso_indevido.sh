curl -X PUT http://localhost:8080/contatos/9999 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TOKEN_VALIDO" \
     -d '{"name": "Tentativa Indevida", "telefone": "1100000000", "email": "invasor@example.com"}'
