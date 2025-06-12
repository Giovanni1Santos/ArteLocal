curl -X PUT http://localhost:8080/contatos/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "João Atualizado", "telefone": "11888888888", "email": "joaoatualizado@example.com"}'
