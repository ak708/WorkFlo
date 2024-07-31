import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
export function Prioity() {
  const [priority, setPriority] = useState("");
  return (
    <div className="flex flex-grow">
      <ToggleGroup
        type="single"
        className="flex flex-row gap-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPriority(e.target.value);
        }}
      >
        <ToggleGroupItem value="Low" aria-label="Toggle bold">
          <p>Low</p>
        </ToggleGroupItem>
        <ToggleGroupItem value="Medium" aria-label="Toggle italic">
          <p>Medium</p>
        </ToggleGroupItem>
        <ToggleGroupItem value="High" aria-label="Toggle strikethrough">
          <p>High</p>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
