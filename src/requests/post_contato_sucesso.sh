curl -X POST http://localhost:8080/contatos \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer TOKEN_VALIDO" \
     -d '{"name": "João Silva", "telefone": "11999999999", "email": "joao@example.com"}'
