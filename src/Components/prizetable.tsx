import React from 'react';

const PrizeTable = () => {
  // Dados estruturados em um Array de Objetos para mapeamento dinâmico
  const rows = [
    { label: "+400 Participantes", values: ["R$5.000,00", "R$2.000,00", "-", "-", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+500 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "-", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+600 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "R$1.000,00", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+700 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "R$1.000,00", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+800 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "R$1.000,00", "R$1.000,00", "R$1.000,00", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+900 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "-", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+1000 Participantes", values: ["R$5.000,00", "R$2.000,00", "R$1.000,00", "-", "-", "-", "-", "-", "-", "-", "R$1.000,00"] },
    { label: "+1500 Participantes", values: ["R$10.000,00", "R$2.500,00", "R$2.000,00", "R$2.000,00", "R$1.500,00", "R$1.000,00", "R$1.000,00", "R$1.000,00", "R$1.000,00", "R$1.000,00", "R$2.000,00"] },
  ];

  // Array de cabeçalhos de 10 a 0 (reduzidos para caber melhor em telas menores)
  const headers = ["10 Pontos", "9 Pontos", "8 Pontos", "7 Pontos", "6 Pontos", "5 Pontos", "4 Pontos", "3 Pontos", "2 Pontos", "1 Pontos", "0 Pontos"];

  return (
    <div className="container mt-4">
      {/* O wrapper table-responsive garante a rolagem horizontal suave no mobile */}
      <div className="table-responsive shadow-sm rounded border">
        <table className="table table-striped table-hover align-middle mb-0 text-center" style={{ minWidth: '800px' }}>
          <thead className="table-dark text-nowrap">
            <tr>
              <th scope="col" className="text-start px-3">Participantes</th>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Coluna principal alinhada à esquerda */}
                <td className="text-start px-3 fw-semibold text-secondary">{row.label}</td>
                {/* Mapeamento dos valores de acertos */}
                {row.values.map((val, valIndex) => (
                  <td 
                    key={valIndex} 
                    className={`px-2 ${val !== '-' ? 'text-success fw-bold' : 'text-muted opacity-50'}`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <small className="text-muted d-block mt-2 d-md-none text-center">
        * Arraste para o lado para ver a tabela completa.
      </small>
    </div>
  );
};

export default PrizeTable;
