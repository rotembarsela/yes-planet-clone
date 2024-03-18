import { cn } from "@/lib/utils";
import {
  Link,
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_layout/_orderLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="w-[980px] mx-auto">
      <Stepper />
      <Outlet />
    </div>
  );
}

type StepRoute = {
  title: string;
  link: string;
};

const stepRoutes: StepRoute[] = [
  {
    title: "Tickets",
    link: "/order/tickets",
  },
  {
    title: "Seats",
    link: "/order/seats",
  },
  {
    title: "Payment",
    link: "/order/payment",
  },
  {
    title: "Confirmation",
    link: "/order/confirmation",
  },
];

const Stepper = () => {
  const routerState = useRouterState();
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const currentStep = stepRoutes.findIndex((route) =>
      routerState.location.pathname.startsWith(route.link),
    );
    setActiveStep(currentStep !== -1 ? currentStep + 1 : 1);
  }, [routerState.location]);

  return (
    <div>
      <ol className="flex items-center w-full">
        {stepRoutes.map((step, index) => (
          <Step
            key={index + 1}
            index={index + 1}
            activeStep={activeStep}
            step={step}
          />
        ))}
      </ol>
    </div>
  );
};

interface StepProps {
  index: number;
  activeStep: number;
  step: StepRoute;
}

const Step = ({ index, activeStep, step }: StepProps) => {
  const isActiveStep = activeStep >= index;
  const isFirstStep = index === 1;

  const activeStepLiClassName = cn(
    "flex items-center",
    isFirstStep
      ? ""
      : "w-full before:content-[''] before:w-full before:h-1 before:border-b before:border-4 before:inline-block",
    isActiveStep
      ? "text-blue-600 dark:text-blue-500"
      : "text-gray-500 dark:text-gray-100",
    !isFirstStep && !isActiveStep
      ? "before:border-gray-100 dark:before:border-gray-700"
      : "dark:before:border-blue-700",
  );

  const activeStepLinkClassName = cn(
    "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0",
    isActiveStep
      ? "active bg-blue-100 dark:bg-blue-800"
      : "bg-gray-100 dark:bg-gray-700",
  );

  return (
    <li className={activeStepLiClassName}>
      <Link to={step.link} className={activeStepLinkClassName}>
        <span>{step.title}</span>
      </Link>
    </li>
  );
};
