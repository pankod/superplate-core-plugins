"use client";

import { ShowView } from "@/components/refine-ui/views/show-view";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useShow } from "@refinedev/core";

export default function CategoryShow() {
    const { result } = useShow({});

    return (
        <ShowView>
            <Card>
                <CardHeader>
                    <CardTitle>{result?.title}</CardTitle>
                    <CardDescription>Category ID: {result?.id}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium mb-2">Title</h4>
                            <p className="text-sm text-muted-foreground">
                                {result?.title || "-"}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </ShowView>
    );
}
