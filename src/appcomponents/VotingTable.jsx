import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
import {VoteTableComp} from "./VoteTableComp"
import CustomContainer from "./CustomContainer";

export function VotingTable() {
    const [vote, setVote] = useState("")
    console.log(vote,"vote");
    return (
        <CustomContainer>
            <VoteTableComp/>
            <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold text-center my-4">Voting Table</h1>
            <RadioGroup defaultValue="comfortable" className="w-[250px]" onValueChange={(value) => setVote(value)}>
                <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1" className="text-[18px]">Default</Label>
                </div>
                    <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2" className="text-[18px]">Comfortable</Label>
                </div>
                    <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3" className="text-[18px]">Compact</Label>
                </div>
            </RadioGroup>
            </div>
        </CustomContainer>
    )
}

