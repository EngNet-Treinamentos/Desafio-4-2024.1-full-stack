const API_URL = 'http://localhost:8080';

// Funções para motoristas
async function cadastrarMotorista(motorista) {
    const response = await fetch(`${API_URL}/motoristas`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
        },
        body: JSON.stringify(motorista)
    });

    if (!response.ok) {
        throw new Error('Falha ao cadastrar motorista');
    }

    return response.json();
}

async function listarMotoristas() {
    const response = await fetch(`${API_URL}/motoristas`, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
        }
    });

    if (!response.ok) {
        throw new Error('Falha ao listar motoristas');
    }

    return response.json();
}

// Funções para carros
async function cadastrarCarro(carro) {
    const response = await fetch(`${API_URL}/carros`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
        },
        body: JSON.stringify(carro)
    });

    if (!response.ok) {
        throw new Error('Falha ao cadastrar carro');
    }

    return response.json();
}

async function listarCarros() {
    const response = await fetch(`${API_URL}/carros`, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
        }
    });

    if (!response.ok) {
        throw new Error('Falha ao listar carros');
    }

    return response.json();
}

// Funções para multas
async function cadastrarMulta(multa) {
    const response = await fetch(`${API_URL}/multas`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
        },
        body: JSON.stringify(multa)
    });

    if (!response.ok) {
        throw new Error('Falha ao cadastrar multa');
    }

    return response.json();
}

async function listarMultas() {
    const response = await fetch(`${API_URL}/multas`, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer seu-token-aqui'  // Substitua pelo método de autenticação real
    }
    });

    if (!response.ok) {
        throw new Error('Falha ao listar multas');
    }

    return response.json();
}

export {
    cadastrarMotorista,
    listarMotoristas,
    cadastrarCarro,
    listarCarros,
    cadastrarMulta,
    listarMultas
};