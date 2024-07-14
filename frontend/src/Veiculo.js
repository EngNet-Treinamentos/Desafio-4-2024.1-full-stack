import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Veiculo.css';
import detranLogo from './img/logo.png';
import { FaExclamationTriangle, FaEdit } from 'react-icons/fa'; 

const Veiculo = () => {
  const navigate = useNavigate();

  const veiculos = [
    // Exemplo de dados de veículos
    { placa: 'ABC-1234', marca: 'Fiat', modelo: 'Uno', ano: 2020, cor: 'Vermelho' },
    { placa: 'XYZ-5678', marca: 'Ford', modelo: 'Ka', ano: 2018, cor: 'Azul' },
  ];

  const handleMultasClick = (placa) => {
    
    navigate('/multas', { state: { placa } });
  };

  const handleEditarClick = (placa) => {
    navigate('/editar', { state: { placa } });
  };

  return (
    <div className="container">
      <div className="header">
        <img src={detranLogo} alt="DetranSys Logo" className="logo" />
        <div className="close-icon" onClick={() => navigate('/visualizar')}>✖</div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>Multas</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {veiculos && veiculos.length > 0 ? (
              veiculos.map((veiculo) => (
                <tr key={veiculo.placa}>
                  <td>{veiculo.placa}</td>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.ano}</td>
                  <td>{veiculo.cor}</td>
                  <td>
                    <FaExclamationTriangle 
                      className="multas-icon" 
                      onClick={() => handleMultasClick(veiculo.placa)}
                    />
                  </td>
                  <td>
                    <FaEdit 
                      className="editar-icon" 
                      onClick={() => handleEditarClick(veiculo.placa)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Nenhum veículo encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => navigate('/Cadastrar_carro')}>Cadastrar Veículo</button>
      </div>
    </div>
  );
};

export default Veiculo;
