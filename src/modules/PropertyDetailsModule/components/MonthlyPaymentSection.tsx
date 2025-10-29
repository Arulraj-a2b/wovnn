import { useState } from "react";
import {
  SvgShieldCheck,
  SvgCalendar,
  SvgHouse,
  SvgMoneyBill,
} from "@/assets/icons";
import { Slider } from "@/components/ui/slider";

interface MonthlyPaymentSectionProps {
  propertyPrice: number;
}

const MonthlyPaymentSection = ({
  propertyPrice,
}: MonthlyPaymentSectionProps) => {
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(10);
  const [downPayment, setDownPayment] = useState(0);
  const [propertyCost, setPropertyCost] = useState(propertyPrice);

  const loanAmount = propertyCost - (propertyCost * downPayment) / 100;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const minPropertyCost = Math.floor(propertyPrice * 0.8);
  const maxPropertyCost = Math.ceil(propertyPrice * 1.2);

  return (
    <div className="bg-[#f0f5ff] rounded-[10px] p-8">
      <h2 className="text-2xl font-bold text-[#141928] mb-8">
        Estimated Monthly Payment
      </h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-8">
        {/* Interest Rate */}
        <div>
          <label className="text-[#3c4150] text-lg font-bold mb-3 block">
            Interest Rate, %
          </label>
          <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] px-4 py-3 mb-2">
            <span className="text-[#787d8c] text-base">{interestRate}</span>
          </div>
          <Slider
            min={1}
            max={10}
            step={0.1}
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className="text-[#3c4150] text-lg font-bold mb-3 block">
            Loan Term, Years
          </label>
          <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] px-4 py-3 mb-2">
            <span className="text-[#787d8c] text-base">{loanTerm}</span>
          </div>
          <Slider
            min={5}
            max={30}
            step={5}
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
          />
        </div>

        {/* Property Cost */}
        <div>
          <label className="text-[#3c4150] text-lg font-bold mb-3 block">
            Property Cost
          </label>
          <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] px-4 py-3 mb-2 flex items-center gap-2">
            <span className="text-[#787d8c] text-base">$</span>
            <span className="text-[#787d8c] text-base">
              {propertyCost.toLocaleString()}
            </span>
          </div>
          <Slider
            min={minPropertyCost}
            max={maxPropertyCost}
            step={1000}
            value={[propertyCost]}
            onValueChange={(value) => setPropertyCost(value[0])}
          />
        </div>

        {/* Down Payment */}
        <div>
          <label className="text-[#3c4150] text-lg font-bold mb-3 block">
            Down Payment, %
          </label>
          <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] px-4 py-3 mb-2 flex items-center gap-2">
            <span className="text-[#787d8c] text-base">{downPayment}</span>
            <span className="text-[#787d8c] text-base ml-auto">
              $ {((propertyCost * downPayment) / 100).toLocaleString()}
            </span>
          </div>
          <Slider
            min={0}
            max={50}
            step={5}
            value={[downPayment]}
            onValueChange={(value) => setDownPayment(value[0])}
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] mt-8 p-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <SvgShieldCheck />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#141928]">
                    {interestRate.toFixed(1)} %
                  </span>
                </div>
                <p className="text-[#787d8c] text-sm">Interest Rate</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <SvgCalendar />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#141928]">
                    {loanTerm} Years
                  </span>
                </div>
                <p className="text-[#787d8c] text-sm">Period</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <SvgHouse />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#141928]">$</span>
                  <span className="text-2xl font-bold text-[#141928]">
                    {loanAmount.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <p className="text-[#787d8c] text-sm">Loan Amount</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <SvgMoneyBill />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#141928]">$</span>
                  <span className="text-2xl font-bold text-[#141928]">
                    {monthlyPayment.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <p className="text-[#787d8c] text-sm">Monthly Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPaymentSection;
